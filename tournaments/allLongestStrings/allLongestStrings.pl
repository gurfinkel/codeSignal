#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub allLongestStrings {
    my ($inputArray) = @_;

    my $result = [];

    foreach my $item (@$inputArray) {
        if (!length @$result || length @$result[0] == length $item) {
            push $result, $item;
        } elsif (length @$result[0] < length $item) {
            $result = [$item];
        }
    }

    return $result;
}
