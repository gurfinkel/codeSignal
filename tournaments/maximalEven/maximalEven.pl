#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub maximalEven {
    my ($inputArray) = @_;

    use List::Util qw( min max );

    my $result = 0;

    foreach my $item (@$inputArray) {
        unless ($item & 1) {
            $result = max($result, $item);
        }
    }

    return $result;
}
