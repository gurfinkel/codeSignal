#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub longestString {
    my ($inputArray) = @_;

    my $result = "";

    foreach my $item (@$inputArray) {
        if (length $result < length $item) {
            $result = $item;
        }
    }

    return $result;
}
