#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub allLongestStrings {
    my ($inputArray) = @_;

    my @result = ();

    foreach (@$inputArray) {
        if (!scalar(@result) || length($result[0]) == length($_)) {
            push @result, $_;
        } elsif (length($result[0]) < length($_)) {
            @result = ($_);
        }
    }
    return \@result;
}
